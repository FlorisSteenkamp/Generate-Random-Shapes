declare const _debug_: Debug; 

import * as React from 'react';
import { useRef, useEffect } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, Grid, SelectChangeEvent, Button, Box } from '@mui/material';
import { StateControl } from '../state-control/state-control.js';
import { Debug } from 'generate-random-shapes';
import { IDebugElems } from 'generate-random-shapes';
import { ToDraw } from '../state/to-draw.js';
import { deleteSvgs } from './delete-svgs.js';
import { Checkbox } from '../components/simple-checkbox.js';
import { points } from '../state/points.js';
import { ClickFor, PageState } from '../state/page-state.js';
import { loadDeducedProps } from './load-deduced-props.js';
import { toViewBoxStr } from './viewbox.js';
import { specialPs } from '../get-special-points/special-ps.js';
import { clickedForNewViewboxFirst } from './clicked-for-new-viewbox-first.js';
import { clickedForNewViewboxSecond } from './clicked-for-new-viewbox-second.js';
import { drawRect } from './draw-rect.js';
import { getViewboxXY } from './get-viewbox-xy.js';
import { gotoPrevViewbox } from './goto-prev-viewbox.js';
import { timeIt } from '../main/time-it.js';


const toDrawCheckboxStyles = { 
	div: {
		display: 'inline-block', 
		marginBottom: '5px', 
		fontWeight: 400,
		width: '150px'
	}
}


interface Props {
	stateControl: StateControl;
	pageState: PageState;
}


const toDrawKeyToText: { [P in keyof ToDraw]?: string } = {
	point: 'points',
	cubics: 'cubics',
	polygon: 'hull',
	triangles: 'triangles'
}


function Page(props: Props) {
	// Props
	const { stateControl, pageState } = props;
    const { state, upd, upd$, transientState } = stateControl;
    const { appState } = state;
	const { $svgs } = transientState;
	const { toDraw, lockedPoints, pointsName } = pageState;

	// Hooks
	const ref = useRef<SVGSVGElement>(null);
	const refX = useRef<HTMLSpanElement>(null);
	const refY = useRef<HTMLSpanElement>(null);
	useEffect(function() { lazyLoadDeduced() }, []); // run only once
	//const [{x,y}, setXY] = useState({x: 0, y: 0});
	
	
	function mouseMove(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
		const svg$ = ref.current;
		if (!svg$) { return; }

		const { state, transientState } = stateControl;
		const { pageState } = state.appState;
		const { zoomState } = transientState;

		if (!zoomState.mouseIsDown) { return; }

		// Pixel coordinates
		const pixelsX = event.nativeEvent.offsetX;
		const pixelsY = event.nativeEvent.offsetY;
		
		const [viewboxX,viewboxY] = 
			getViewboxXY(svg$, pageState.viewbox, pixelsX, pixelsY);

		const spanX = refX.current;
		if (spanX) { spanX.innerHTML = viewboxX.toFixed(2); }
		const spanY = refY.current;
		if (spanY) { spanY.innerHTML = viewboxY.toFixed(2); }
	
		if (zoomState.zoomRect) { zoomState.zoomRect.remove(); }
		const prevViewboxXY = zoomState.prevViewboxXY!;

		const newZoomRect = [
			prevViewboxXY, 
			[viewboxX, viewboxY]
		];

		const g$ = svg$.getElementsByTagName('g')[0];
		zoomState.zoomRect = drawRect(g$, newZoomRect);

		//setXY({x,y});
	}


	function mouseDown(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
		if (event.shiftKey || event.ctrlKey || event.altKey) { return; }
		
		const svg$ = ref.current;
		if (!svg$) { return; }
		
		const ox = event.nativeEvent.offsetX;
		const oy = event.nativeEvent.offsetY;
		const viewboxXY = getViewboxXY(svg$, pageState.viewbox, ox, oy);
		
		clickedForNewViewboxFirst(stateControl, viewboxXY);
	}


	function mouseUp(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
		if (event.shiftKey || event.ctrlKey || event.altKey) { return; }

		const svg$ = ref.current;
		if (!svg$) { return; }

		const ox = event.nativeEvent.offsetX;
		const oy = event.nativeEvent.offsetY;
		const viewboxXY = getViewboxXY(svg$, pageState.viewbox, ox, oy);
		
		clickedForNewViewboxSecond(stateControl, viewboxXY);
	}


	function toDrawChanged(key: keyof ToDraw) {
		return (shouldDraw: boolean) => {
			upd(pageState.toDraw, { [key]: shouldDraw });
			drawElements(stateControl.state.appState.pageState.toDraw)
		}
	}


	async function drawElements(toDraws: ToDraw) {
        if (typeof _debug_ === 'undefined') { return; }

		const svg$ = ref.current!;
		const g = svg$.getElementsByTagName('g')[0];

		const elemss$: SVGElement[][][] = [];
        for (const elemType_ in toDraws) {
            const elemType = elemType_ as keyof IDebugElems;

            const toDraw = toDraws[elemType];

            const $elems = $svgs[elemType];
            deleteSvgs($elems);
     
            if (!toDraw) { continue; }

			const generated = _debug_.generated;
            
			if (generated.elems[elemType] === undefined) { 
				continue; 
			}
			
            for (const elem of generated.elems[elemType]) {
                const drawElem = _debug_.fs.drawElem[elemType] as (g: SVGGElement, elem: any) => SVGElement[];
                $elems.push(drawElem(g, elem));
			}
			
			elemss$.push($elems);
		}
		
		return elemss$;
	}


	async function lazyLoadDeduced() {
		let pageState: PageState;

		({ pageState } = stateControl.state.appState);
		const { pointsName } = pageState;

		const { viewbox, timingAll, shape } = await loadDeducedProps(
			stateControl, pointsName as keyof typeof specialPs
		);

		console.log(`All took: ${timingAll.toFixed(0)} milliseconds.`);

        if (typeof _debug_ !== 'undefined') {
            // logSomeStuff(timingAll);
        }

		const elems$ = drawElements(toDraw);

		({ pageState } = stateControl.state.appState);

		upd(pageState, { 
			viewbox,
			deduced: {
				// shape
				cubics: shape
			}
		});
	}


	//function vectorChanged(vectorName: string) {
	function pointsNameChanged(
			// event: React.ChangeEvent<{
			// 	name?: string;
			// 	value: unknown;
			// }>, child: React.ReactNode) {
			event: SelectChangeEvent<any>,
			child: React.ReactNode) {

		const pointsName = event.target.value as string;
		upd(pageState, { pointsName });
		lazyLoadDeduced();
	}

	function onClickForChanged(key: ClickFor | 'spacer'): void {
		if (key === 'spacer') { return; }
		upd(pageState, { clickFor: key });
	}


	function onClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
		if (event.shiftKey) { 
			gotoPrevViewbox(stateControl); 
			return;
		}

		const { state } = stateControl;
        const { pageState } = state.appState;
		const { clickFor, showDelay } = pageState;
		
		const svg$ = ref.current;
		if (!svg$) { return; }
		const g = svg$.getElementsByTagName('g')[0];

        // Pixel coordinates
        const ox = event.nativeEvent.offsetX;
        const oy = event.nativeEvent.offsetY;

		// SVG actual coordinates
		const viewboxXY = getViewboxXY(svg$, pageState.viewbox, ox, oy);
		const [x,y] = viewboxXY;

        const fs: { [T in ClickFor]: ((g: SVGGElement, p: number[], delay: number) => void) | undefined } = {
			// bezier: logNearestBezier,
			point: undefined,
			hull: undefined,
			cubics: undefined,
			// offenders: undefined,
			// preOffenders: undefined
        }

		const f = fs[clickFor];

		if (f === undefined) { return; }

		f(g, [x,y], showDelay);
    }


	return (<>
        <Container maxWidth="md" style={{ height: 'calc(100%)', padding: '10px' }}>
			<Box style={{ marginBottom: '10px' }}>
			{Object
			.keys(toDraw)
			.filter(key => !!toDrawKeyToText[key as keyof ToDraw])
			.map(_key => {
				const key = _key as keyof ToDraw;
				return (
					<Checkbox 
						key={key}
						checked={toDraw[key]} 
						styles={toDrawCheckboxStyles}
						text={toDrawKeyToText[key] as string}
						onChanged={toDrawChanged(key)} 
					/>
				);
			})}
			</Box>
			{/*
			<hr style={{ 
				display: 'block',  height: '1px', 
    			border: '0',  borderTop: '1px solid #ccc', 
    			margin: '1em 0', padding: 0, color: '#eee' }} 
			/>
			*/}
			{/*
			<ButtonGroup<ClickFor | 'spacer'>
				label='Click'
				styles={{ div: { display: 'inline-block', margin: '20px' } }}
				options={{
					point: { text: 'point' },
					hull: { text: 'hull' },
				}}
				value={pageState.clickFor}
				onChanged={onClickForChanged}
			/>
			*/}

				<FormControl variant="outlined" style={{ minWidth: '200px' }}>
				<InputLabel id="select-outlined-label">Points</InputLabel>
				<Select
					labelId="select-outlined-label"
					id="select-outlined"
					value={pageState.pointsName}
					onChange={pointsNameChanged}
					label="Shape"
				>
					{points.map(v => 
						<MenuItem key={v} value={v}>{v}</MenuItem>
					)}
				</Select>
				</FormControl>
				
				<Button
					variant="outlined" style={{ marginLeft: '10px' }}
					// onClick={testOffenders}
				>
					test offenders
				</Button>
				<Button
					variant="outlined" style={{ marginLeft: '10px' }}
					onClick={lockUnlock(stateControl)}
				>
					{lockedPoints === undefined ? 'lock' : 'unlock' }
				</Button>
				<Button
					variant="outlined" style={{ marginLeft: '10px' }}
					onClick={timeIt(pointsName as keyof typeof specialPs)}
				>
					time it
				</Button>
			<span ref={refX} style={{ userSelect: 'none', position: 'absolute', bottom: '13px', left: '10px' }}>
				{/*{x.toFixed(2)}*/}
			</span>
			<span ref={refY} style={{ userSelect: 'none', position: 'absolute', bottom: '13px', left: '80px' }}>
				{/*{y.toFixed(2)}*/}
			</span>
			<svg 
				ref={ref}
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="svg"
				x="0px" 
				y="0px"
				viewBox={toViewBoxStr(pageState.viewbox)}
				style={{ width: '100%', backgroundColor: 'black' }}
				onMouseDown={mouseDown}
				onMouseUp={mouseUp}
				onMouseMove={mouseMove}
				onClick={onClick}
			>
				<g />
			</svg>
        </Container>
    </>);
}


/*
function testOffenders() {
	const count = 100;
	const offenderCount = 0;
	for (const i=0; i<count; i++) {
		const points = specialPs.randomInUnitCircle50();
		const shape = createShape(points);
		offenderCount += _debug_.generated.elems.offender.length;
	}

	console.log(`avg offenders: ${offenderCount/count}`)
}
*/


function lockUnlock(stateControl: StateControl) {
	return (): void => {
		const { upd, state } = stateControl;
		const { appState } = state;
		const { pageState } = appState;

		const lockedPoints = pageState.lockedPoints === undefined
			? _debug_.generated.elems.point
			: undefined;
		
		upd(pageState, { lockedPoints });
	}
}


export { Page }

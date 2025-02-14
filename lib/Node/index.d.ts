import React, { SyntheticEvent } from 'react';
import { HierarchyPointNode } from 'd3-hierarchy';
import { Orientation, Point, TreeNodeDatum, RenderCustomNodeElementFn } from '../types/common';
declare type NodeEventHandler = (hierarchyPointNode: HierarchyPointNode<TreeNodeDatum>, evt: SyntheticEvent) => void;
declare type NodeProps = {
    data: TreeNodeDatum;
    position: Point;
    hierarchyPointNode: HierarchyPointNode<TreeNodeDatum>;
    parent: HierarchyPointNode<TreeNodeDatum> | null;
    nodeClassName: string;
    nodeSize: {
        x: number;
        y: number;
    };
    orientation: Orientation;
    enableLegacyTransitions: boolean;
    transitionDuration: number;
    renderCustomNodeElement: RenderCustomNodeElementFn;
    onNodeToggle: (nodeId: string) => void;
    onNodeClick: NodeEventHandler;
    onNodeRightClick: NodeEventHandler;
    onNodeMouseOver: NodeEventHandler;
    onNodeMouseOut: NodeEventHandler;
    subscriptions: object;
};
declare type NodeState = {
    transform: string;
    initialStyle: {
        opacity: number;
    };
};
export default class Node extends React.Component<NodeProps, NodeState> {
    private nodeRef;
    state: {
        transform: string;
        initialStyle: {
            opacity: number;
        };
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: NodeProps): boolean;
    shouldNodeTransform: (ownProps: NodeProps, nextProps: NodeProps) => boolean;
    setTransform(position: NodeProps['position'], parent: NodeProps['parent'], orientation: NodeProps['orientation'], shouldTranslateToOrigin?: boolean): string;
    applyTransform(transform: string, transitionDuration: NodeProps['transitionDuration'], opacity?: number, done?: () => void): void;
    commitTransform(): void;
    renderNodeElement: () => JSX.Element;
    handleNodeToggle: () => void;
    handleOnClick: (evt: any) => void;
    handleOnRightClick: (evt: any) => void;
    handleOnMouseOver: (evt: any) => void;
    handleOnMouseOut: (evt: any) => void;
    componentWillLeave(done: any): void;
    render(): JSX.Element;
}
export {};

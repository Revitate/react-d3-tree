import React from 'react';
import { CustomNodeElementProps, SyntheticEventHandler } from '../types/common';
export interface DefaultNodeElementProps extends CustomNodeElementProps {
    onNodeClick: SyntheticEventHandler;
    onNodeRightClick: SyntheticEventHandler;
    onNodeMouseOver: SyntheticEventHandler;
    onNodeMouseOut: SyntheticEventHandler;
}
declare const DefaultNodeElement: React.FunctionComponent<DefaultNodeElementProps>;
export default DefaultNodeElement;

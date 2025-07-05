import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const elements = [
  // ノード
  { data: { id: 'a', label: 'ノードA' } },
  { data: { id: 'b', label: 'ノードB' } },
  { data: { id: 'c', label: 'ノードC' } },
  // エッジ
  { data: { id: 'ab', source: 'a', target: 'b' } },
  { data: { id: 'bc', source: 'b', target: 'c' } },
  { data: { id: 'ca', source: 'c', target: 'a' } },
];

const style = [
  {
    selector: 'node',
    style: {
      'background-color': '#0074D9',
      'label': 'data(label)',
      'color': '#fff',
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': 16,
      'width': 50,
      'height': 50,
      'border-width': 2,
      'border-color': '#fff',
    },
  },
  {
    selector: 'edge',
    style: {
      'width': 3,
      'line-color': '#888',
      'target-arrow-color': '#888',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
    },
  },
];

const layout = {
  name: 'circle',
  fit: true,
  padding: 30,
};

const NetworkGraph = () => {
  const cyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      cyRef.current = cytoscape({
        container: containerRef.current,
        elements,
        style,
        layout,
        boxSelectionEnabled: false,
        autounselectify: true,
      });

      // ノードをドラッグで移動可能にする
      cyRef.current.nodes().grabify();
    }
    // クリーンアップ
    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        margin: 0,
        padding: 0,
        background: '#fff',
        zIndex: 0,
      }}
    />
  );
};

export default NetworkGraph;

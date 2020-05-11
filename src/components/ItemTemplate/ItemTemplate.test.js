import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Template from './ItemTemplate';
import mck from './JSON/MCKTemplate.json'
import tf from './JSON/TFTemplate.json'
import mcs from './JSON/MCSTemplate.json'
import mcms from './JSON/MCMSTemplate.json'
import multi from './JSON/MULTITemplate.json'
import CKEditorBase from '../ui/CKEditorBase'

afterEach(cleanup)
test('Item Template data', () => {
  const { getByText,getByTestId } = render(<Template />);
  const library = getByText('Item Creation', 'Task Type :', 'Task Sub-Type :')
  const ckEditor = <CKEditorBase />
  // expect(library).toBeInTheDocument();
  
  if (fireEvent.click(getByText("Multiple Choice - Keyed"))) {
    mck.map(obj => {
      const stem = obj.stem.label
      expect.stringContaining(stem)
      expect(ckEditor).toBeInTheDocument;
      obj.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
        expect(ckEditor).toBeInTheDocument;
      })
    })
  }
  if (fireEvent.click(getByText("True/False"))) {
    tf.map(obj => {
      const stem = obj.stem.label
      expect.stringContaining(stem)
      expect(ckEditor).toBeInTheDocument;
      obj.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
        expect(ckEditor).toBeInTheDocument;
      })
    })
  }
  if (fireEvent.click(getByText("Multiple Choice - Scaled"))) {
    mcs.map(obj => {
      const stem = obj.stem.label
      expect.stringContaining(stem) >
      expect(ckEditor).toBeInTheDocument;
      obj.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
        const score = responses.score
        console.log(score)
        expect(score).toBeInTheDocument
        expect(ckEditor).toBeInTheDocument;
      })
    })
  }
  if (fireEvent.click(getByText("Multiple Choice - Multiple Selection"))) {
    mcms.map(obj => {
      const stem = obj.stem.label
      expect(ckEditor).toBeInTheDocument;
      expect.stringContaining(stem)
      obj.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
        expect(ckEditor).toBeInTheDocument;
      })
    })
  }
  if (fireEvent.click(getByText("Multi-Part"))) {
    multi.map(obj => {
      const stem = obj.part1.stem.label
      expect.stringContaining(stem)
      expect(ckEditor).toBeInTheDocument;
      obj.part1.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
        expect(ckEditor).toBeInTheDocument;
      })
      const stem2 = obj.part2.stem.label
      expect.stringContaining(stem2)
      expect(ckEditor).toBeInTheDocument;
      obj.part2.responses.map(responses => {
        const response2 = responses.label
        console.log(response2)
        console.log("ckEditor",ckEditor)
        expect.stringContaining(response2)
        expect(ckEditor).toBeInTheDocument;
      })
    })
  }
})

it("Snapshot", () => {
  const { asFragment,getByText }   = render(<Template />);
  expect(asFragment()).toMatchSnapshot();
  if (fireEvent.click(getByText("Multiple Choice - Multiple Selection"))) {
    mcms.map(obj => {
      const stem = obj.stem.label
     // expect(ckEditor).toMatchSnapshot();
      //expect.stringContaining(stem).toMatchSnapshot();
      obj.responses.map(responses => {
        const response = responses.label
        expect.stringContaining(response)
       // expect(ckEditor).toMatchSnapshot();
      })
    })
  }

});



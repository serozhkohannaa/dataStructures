import React from 'react';
import ReactDOM from 'react-dom';
import BinarySearchTemplate from "./BinarySearchTemplate";
import "@testing-library/jest-dom"
import {render, cleanup} from '@testing-library/react';

import rendered from 'react-test-renderer';

afterEach(cleanup);

it('renders', () => {
	const section = document.createElement('section');
	ReactDOM.render(<BinarySearchTemplate></BinarySearchTemplate>, section);
})

it('Renders text correctly', () => {
	const {getByTestId} = render(<BinarySearchTemplate></BinarySearchTemplate>);
	expect(getByTestId('template-title')).toHaveTextContent('Binary search');
})

it('matches snapshot', () => {
	const tree = rendered.create(<BinarySearchTemplate></BinarySearchTemplate>).toJSON();

	expect(tree).toMatchSnapshot();
})
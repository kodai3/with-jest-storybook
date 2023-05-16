import { composeStory } from '@storybook/react';
import { render } from '@testing-library/react';
import Meta, { HomePage } from '../stories/pages/home.stories';

describe('Home', () => {
  it('renders a heading', () => {
    const ComposedHomePage = composeStory(HomePage, Meta);

    const { getByText } = render(<ComposedHomePage />);

    const heading = getByText("Home")

    expect(heading).toBeInTheDocument()
  })
})
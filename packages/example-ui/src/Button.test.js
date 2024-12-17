import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
describe('Button', () => {
    it('renders children correctly', () => {
        const { getByText } = render(_jsx(Button, { children: "Click me" }));
        expect(getByText('Click me')).toBeDefined();
    });
    it('handles click events', () => {
        const onClick = vi.fn();
        const { getByText } = render(_jsx(Button, { onClick: onClick, children: "Click me" }));
        fireEvent.click(getByText('Click me'));
        expect(onClick).toHaveBeenCalled();
    });
});

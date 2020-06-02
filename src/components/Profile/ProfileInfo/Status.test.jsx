import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {
    test("status from props must appear in state", () => {
        const component = create(<Status status={'hi'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hi");
    });
    test("span should appear from the start of rendering", () => {
        const component = create(<Status status={'hi'}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("input shouldn't appear from the start, it should be null", () => {
        const component = create(<Status status={'hi'}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

        test("input should appear in editMode", () => {
            const component = create(<Status status={'hi'}/>);
            const root = component.root;
            let span = root.findByType("span");
            span.props.onDoubleClick();
            let input = root.findByType("input");
            expect(input.props.value).toBe('hi');
    });

    test("span should have props", () => {
        const component = create(<Status status={'hi'}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('hi');
    });

    test("callback fn should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<Status status={'hi'} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
       instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
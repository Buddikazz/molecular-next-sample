"use client";

import React from "react";
import { EditorContext, EditableArea } from "@magnolia/react-editor";

interface ExpanderInteractiveState {
  isCollapsed: boolean;
}
interface ExpanderInteractiveProps {
  renderer: never; // Assuming RendererType is the type/interface of your renderer property
  accordionHeader: never;
  // other props if any
}

class ExpanderInteractive extends React.Component<
  ExpanderInteractiveProps,
  ExpanderInteractiveState
> {
  // eslint-disable-next-line react/static-property-placement
  static contextType = EditorContext;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = { isCollapsed: false };
    this.toggle = this.toggle.bind(this);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = { isCollapsed: false };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggle(event: any) {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
      isCollapsed: !this.state.isCollapsed,
    });
    event.preventDefault();
  }

  render() {
    const { renderer, accordionHeader } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { isCollapsed }: any = this.state;
    return (
      <div
        data-testid="accordion-content"
        className="border-b-2 rounded-md mb-1"
      >
        <div className="flex-row">
          <button
            type="button"
            className="text-black w-full p-4 text-left transition duration-300 flex items-center justify-between"
            onClick={(e) => {
              e.preventDefault();
              this.setState({ isCollapsed: !isCollapsed });
            }}
          >
            {accordionHeader && (
              <EditableArea
                className="text-xl text-black p-1  font-dmserif font-semibold"
                content={accordionHeader}
              />
            )}

            <svg
              data-accordion-icon
              className={`float-right w-3 h-3 rotate-180 shrink-0 ${
                isCollapsed ? "!rotate-180" : "!rotate-0"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 7"
            >
              <path
                stroke="#522367"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </div>

        {isCollapsed && (
          <div
            data-testid="accordion-content"
            className="text-black pl-4 bg-white"
          >
            {renderer}
          </div>
        )}
      </div>
    );
  }
}

export default ExpanderInteractive;

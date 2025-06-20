import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import IconConsumerMixin from "./IconConsumerMixin";

@customElement("metronome-icon")
export default class MetronomeIcon extends IconConsumerMixin(LitElement) {
    static styles = css`
        svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    `;

    protected override renderIcon() {
        return html`
            <svg
                fill=${this.color}
                width="800px"
                height="800px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill-rule="evenodd">
                    <path
                        d="M64.458 228.867c-.428 2.167 1.007 3.91 3.226 3.893l121.557-.938c2.21-.017 3.68-1.794 3.284-3.97l-11.838-64.913c-.397-2.175-1.626-2.393-2.747-.487l-9.156 15.582c-1.12 1.907-1.71 5.207-1.313 7.388l4.915 27.03c.395 2.175-1.072 3.937-3.288 3.937H88.611c-2.211 0-3.659-1.755-3.233-3.92L114.85 62.533l28.44-.49 11.786 44.43c.567 2.139 2.01 2.386 3.236.535l8.392-12.67c1.22-1.843 1.73-5.058 1.139-7.185l-9.596-34.5c-1.184-4.257-5.735-7.677-10.138-7.638l-39.391.349c-4.415.039-8.688 3.584-9.544 7.912L64.458 228.867z"
                    />
                    <path
                        d="M118.116 198.935c-1.182 1.865-.347 3.377 1.867 3.377h12.392c2.214 0 4.968-1.524 6.143-3.39l64.55-102.463c1.18-1.871 3.906-3.697 6.076-4.074l9.581-1.667c2.177-.379 4.492-2.38 5.178-4.496l4.772-14.69c.683-2.104-.063-5.034-1.677-6.555L215.53 54.173c-1.609-1.517-4.482-1.862-6.4-.78l-11.799 6.655c-1.925 1.086-3.626 3.754-3.799 5.954l-.938 11.967c-.173 2.202-1.27 5.498-2.453 7.363l-72.026 113.603z"
                    />
                </g>
            </svg>
        `;
    }
}

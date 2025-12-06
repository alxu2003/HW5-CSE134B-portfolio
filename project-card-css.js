export function projectCardCSS() {
    return `
            article {
                display: inline-flex;
                flex-direction: column;
                row-gap: 16px;
                align-items: left;
                width: 100%;
                /* overflow: hidden; */
                box-sizing: border-box;

                &:hover {
                picture {
                    transform: scale(1.02);
                    transition: transform 0.3s ease;
                }
                }
                
                picture {
                transition: transform 0.3s ease;
                border: var(--border-width) solid var(--border-color);
                border-radius: 16px;
                img{
                width: 100%;
                }
                overflow: hidden;
                height: 18vw;
                }

                hgroup {
                display: flex;
                flex-direction: column;
                gap: calc(0.5*var(--height-spacing-unit,1.6dvh));

                h2 {
                    order: 2;
                }

                h3 {
                    order: 1;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    span{
                    font-size: calc(0.75*var(--base-font-size,16px));
                    background-color: #303E5B;
                    color: #F9FBFF;
                    padding-inline: calc(0.4*var(--width-spacing-unit,1.6dvw));
                    padding-block: calc(0.4*var(--height-spacing-unit,1.6dvh));
                    border-radius: 4px;
                    }
                }

                p{
                    order: 3;
                }
            }`
} 
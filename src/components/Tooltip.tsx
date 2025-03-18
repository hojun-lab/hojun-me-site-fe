import styled from "styled-components";

interface Props {
    message: string;
    children: React.ReactNode;
}

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: inline-block;

    &:hover > .tooltip,
    &:active > .tooltip {
        display: block;
    }

    .tooltip {
        white-space: pre-line;
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #eef3fd;
        border: #7689fd solid 1px;
        border-radius: 5px;
        color: #505bf0;
        font-size: 12px;
        font-weight: 500;
        height: auto;
        letter-spacing: -0.25px;
        margin-top: 6.8px;
        padding: 5px 11px;
        width: max-content;
        z-index: 100;
        transform: translate(-44%, 110%);
    }

    // 말풍선 테두리와 꼬리를 위한 before, after
    .tooltip::after {
        border-color: #eef3fd transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: "";
        display: block;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        top: -7px;
        width: 0;
        z-index: 1;
    }

    .tooltip::before {
        border-color: #7689fd transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: "";
        display: block;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        top: -8px;
        width: 0;
        z-index: 0;
    }
`;
const Tooltip = (props:Props)=> {
    return (
        <Container>
            {props.children}
            <div className="tooltip">{props.message}</div>
        </Container>
    );
}

export default Tooltip;
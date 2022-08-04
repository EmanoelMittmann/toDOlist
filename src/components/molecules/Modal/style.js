import styled from "styled-components";

export const ContentModal = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,.2);
    backdrop-filter: blur(3px);
    align-items: center;
    color: #141414;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    line-height: 1.8;
    z-index:10;
    width: 100%;
    height:100%;
`

export const MainModal = styled.div`
    width: 300px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;    
    z-index: 10;
    border-radius: 10px;    
`

export const ContainerModal = styled.form`
    background-color: #cdcdcd;
    width: 30em;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10;
    border-radius: 10px;

    .child{
        display: flex;
        justify-content: space-around;
        margin: 25px ; 
    }
`
export const ContainerModal2 = styled.form`    
    background-color: #cdcdcd;
    width: 30em;
    height: 400px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 10;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    .child{
        display: flex;
        justify-content: space-around;
        margin: 25px ; 
    }
`
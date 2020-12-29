import { RouteComponentProps } from 'react-router-dom';

interface INavbarProps extends RouteComponentProps<any> {
    open:boolean,
    handleDrawer():void,
    auth:boolean,
    setAuth:(auth:boolean)=>void,
    userMoney:number,
}
export default INavbarProps;
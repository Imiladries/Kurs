import React, { PropsWithChildren } from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import ItemList from "./ItemList";
import ProductsList from "./ProductList";
import IRoutesProps from "./Props/IRoutesProps";
import LoginView from "./Auth/LoginView";
import RegisterView from "./Auth/RegisterView";
import Payment from "./Payment/PaymentIndex";


const Routes: React.FC<IRoutesProps>=({auth,setAuth,setProductsInCart}) => {
    return(
        <Switch> 
            <Route path="/login" component={(props: JSX.IntrinsicAttributes)=>
                <LoginView auth={auth} setAuth={setAuth} {...props} />
            }/>
            <Route component={RegisterView} path="/register" />

            {auth
                ?<>
                    <Route component={ItemList} path="/" exact />
                    <Route component={Payment} path="/payment" exact />
                        <Route path="/products" component={(props: JSX.IntrinsicAttributes) =>
                            <ProductsList setProductsInCart={setProductsInCart} {...props} />
                        } />
                </>
                :<Redirect to='/login'/>
            }
            
          
        </Switch>
    )
} 

export default Routes;
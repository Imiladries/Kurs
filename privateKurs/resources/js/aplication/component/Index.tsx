import React from 'react';
import clsx from 'clsx';
import useStyles from "./Style/NavApp";
import IndexProps from "./Props/IndexProps";

const index:React.FC<IndexProps>=(props:any)=>{
    const classes = useStyles();
    return(
        <div className={classes.grow}>
            <main
                className={clsx(classes.content,{
                    [classes.contentShift]:props.open,
                })}>
                {...props.children}
                </main>
        </div>
    );
};

export default index;
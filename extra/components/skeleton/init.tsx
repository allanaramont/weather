import {Grid12, Grid6} from "../common/grid";
import {Grid, useTheme} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
import {alpha} from "@material-ui/core/styles";
import React from "react";

export function SkeletonInit(){
    const theme = useTheme();
    return(
        <>
            <Grid12 style={{marginTop:10}}>
                <Grid6>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Skeleton variant="circle" width={200} height={200}/>
                    </Grid>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{marginTop:10,marginBottom:10}}>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                </Grid6>
            </Grid12>
            <Grid12 style={{backgroundColor:alpha(theme.palette.background.paper, 0.4),}}>
                <Grid6>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{marginTop:10,marginBottom:10}}>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                </Grid6>
            </Grid12>
            <Grid12 style={{
                borderBottomLeftRadius:theme.shape.borderRadius,
                borderBottomRightRadius:theme.shape.borderRadius
            }}>
                <Grid6>
                </Grid6>
                <Grid6 justifyContent={'center'} style={{marginTop:10,marginBottom:10}}>
                    <Skeleton width={'80%'} height={50}/>
                    <Skeleton width={'80%'} height={50}/>
                </Grid6>
            </Grid12>
        </>
    )
}
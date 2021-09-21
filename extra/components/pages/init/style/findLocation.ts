import { alpha , createStyles , makeStyles , Theme } from "@material-ui/core/styles";

export const useFindLocationCSS = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            margin: theme.spacing(1, 1, 1, 0),
            width: '100%',
        },
        inputIcon: {
            margin: theme.spacing(1.5, 0, 0, 1),
        }
    }),
);
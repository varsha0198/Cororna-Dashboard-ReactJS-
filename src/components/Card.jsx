import { Box, Card, CardContent, Grid, Typography, makeStyles } from "@material-ui/core";
import CountUp from 'react-countup';

const useStyle = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10,
    }
})

const CardCompponent = ({ cardTitle, value, desc, lastUpdate }) => {
    const classes = useStyle();
    return (
        <Grid component={Card} style={{ margin: 29, borderBottom: '10px solid orange' }}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={3} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    );
}
export default CardCompponent;
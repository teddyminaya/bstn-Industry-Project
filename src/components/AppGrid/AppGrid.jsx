import './AppGrid.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AppGrid() {
    return (
        <>
            <p>Hello</p>
            <Card sx={{ maxWidth: 100 }}>
                <CardContent>
                    <p>Hello</p>
                </CardContent>
            </Card>
        </>
    );
}

export default AppGrid;
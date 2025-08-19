import React from 'react';
import { Button, Stack } from 'react-bootstrap';

export default function ButtonVarientsDemo(){
    return (
        <Stack gap={2}  direction="vertical" classmate="m-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
           
        </Stack>
    );
}
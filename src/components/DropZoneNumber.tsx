import { Box, Container, Group, Stack, Text } from "@mantine/core";
import React from "react";

interface NumberProps {
    number: string;
    value: string;
}

export default function DropZoneNumber({number, value} : NumberProps) {

    return (
        <Stack align="flex-start" spacing = "xs">
        <Group spacing="sm">
        <Box sx={(theme) => ({ backgroundColor: 'black', width: 50, height: 75 })}>
            <Text ta="center" c="white" sx={(theme) => ({ fontFamily: 'Rozha One', fontWeight: 900, fontSize: 50 })} > {number[0]}</Text>
        </Box>
        <Box sx={(theme) => ({ backgroundColor: 'black', width: 50, height: 75 })}>
            <Text ta="center" c="white" sx={(theme) => ({ fontFamily: 'Rozha One', fontWeight: 900, fontSize: 50 })} > {number[1]}</Text>
        </Box>
        </Group >
        <div style={{width:110}}>
            <Text ta="center" c="black" sx={(theme) => ({ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: 25 })} > {value} </Text>
        </div>
        </Stack>
    );
}
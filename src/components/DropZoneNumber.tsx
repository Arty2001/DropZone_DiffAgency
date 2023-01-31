import { Box, Container, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

interface NumberProps {
    number: string;
    value: string;
}

export default function DropZoneNumber({ number, value }: NumberProps) {
    const largeScreen = useMediaQuery('(min-width: 900px)');

    return (
        <Stack align="flex-start" spacing="xs">
            <Group spacing="sm">
                <Box sx={(theme) => ({ backgroundColor: 'black', width: largeScreen ? 45 : 50, height: largeScreen ? 75 : 50 })}>
                    <Text ta="center" c="white" style={{ fontFamily: 'Rozha One', fontWeight: 900, fontSize: largeScreen ? 50: 30 }} > {number[0]}</Text>
                </Box>
                <Box sx={(theme) => ({ backgroundColor: 'black', width: largeScreen ? 45 : 50, height: largeScreen ? 75 : 50 })}>
                    <Text ta="center" c="white" style={{ fontFamily: 'Rozha One', fontWeight: 900, fontSize: largeScreen ? 50 : 30 }} > {number[1]}</Text>
                </Box>
            </Group >
            <div style={{ width: 110 }}>
                <Text ta="center" c="black" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, fontSize: largeScreen ? 25 : 20 }} > {value} </Text>
            </div>
        </Stack>
    );
}
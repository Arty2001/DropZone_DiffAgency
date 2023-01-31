import { Box, Center, Container, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import React from "react";
import DropZoneNumber from "./DropZoneNumber";

export default function DropZoneCountDown() {
    const largeScreen = useMediaQuery('(min-width: 900px)');

    return (
        
        <Flex style={{ height: "80vh" }} 
            gap="md"
            justify= {largeScreen ? "flex-end" : "center"}
            align={largeScreen ? "center":"flex-end"}
            direction="row"
            wrap="wrap"
            mr={largeScreen ? "10%" : 0}>
        <Stack align="center">
                <Title ta="center" style={{ fontSize: largeScreen ? 40 : 35 }} >LEEZY BOOST 103</Title>
            <Group pt={10} pb={10}>
                <DropZoneNumber number="13" value="DAYS" />
                <DropZoneNumber number="08" value="HOURS" />
                <DropZoneNumber number="12" value="MINS" />
                <DropZoneNumber number="05" value="SECS" />
            </Group>
                <Text ta="center" style={{ fontSize: largeScreen ? 25 : 30}}>UNTIL DROP</Text>
        </Stack>
        </Flex>
    );
}
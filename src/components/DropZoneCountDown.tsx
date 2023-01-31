import { Box, Center, Container, Flex, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import DropZoneNumber from "./DropZoneNumber";

export default function DropZoneCountDown() {

    return (
        <Flex style={{ height: "75vh" }} 
            gap="md"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
            mr={"10%"}>
        <Stack align="center">
            <Title ta="center">LEEZY BOOST 103</Title>
            <Group pt={10} pb={10}>
                <DropZoneNumber number="13" value="DAYS" />
                <DropZoneNumber number="08" value="HOURS" />
                <DropZoneNumber number="12" value="MINS" />
                <DropZoneNumber number="05" value="SECS" />
            </Group>
            <Text ta="center">UNTIL DROP</Text>
        </Stack>
        </Flex>
    );
}
import { Box, Container, Group, Stack, Text } from "@mantine/core";
import React from "react";

export default function DropZoneLogo() {

    return (
        <Container style={{maxWidth:"100%"}} ml={0} mr={0} pl={0} pr={0}>
            <Group position="right" pt={10} pr={10}>
                <Stack spacing="xs">
                    <Box sx={(theme) => ({ backgroundColor: 'black', width: 110, height: 45 })}>
                        <Text ta="center" c="white" sx={(theme) => ({ fontFamily: 'Rozha One', fontWeight: 900, fontSize: 30 })} > DROP </Text>
                    </Box>
                    <Box ml={25} sx={(theme) => ({ backgroundColor: 'black', width: 110, height: 45 })}>
                        <Text ta="center" c="white" sx={(theme) => ({ fontFamily: 'Rozha One', fontWeight: 900, fontSize: 30 })} > ZONE </Text>
                    </Box>
                </Stack>
            </Group>
        </Container>
    );
}
import { Box, Center, Container, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import React, { useState ,useEffect } from "react";
import DropZoneNumber from "./DropZoneNumber";

export default function DropZoneCountDown() {
    const largeScreen = useMediaQuery('(min-width: 900px)');

    const [days, setDays] = useState("13");
    const [hours, setHours] = useState("08");
    const [minutes, setMinutes] = useState("12");
    const [seconds, setSeconds] = useState("05");

    const decrementTime = () => {
        if (seconds!=="00"){
            var s = parseInt(seconds) - 1;
            if (s<10){
                setSeconds("0" +s.toString())
            }
            else{
                setSeconds(s.toString());
            }
        }
        else if (minutes!=="00"){
            var m = parseInt(minutes) - 1;
            if (m < 10) {
                setMinutes("0" + m.toString())
            }
            else {
                setMinutes(m.toString());
            }
            setSeconds("59");
        }
        else if (hours !== "00") {
            var h = parseInt(hours) - 1;
            if (h < 10) {
                setHours("0" + h.toString())
            }
            else {
                setHours(h.toString());
            }
            setMinutes("59");
            setSeconds("59");
        }
        else if (days !== "00") {
            var d = parseInt(days) - 1;
            if (d < 10) {
                setDays("0" + d.toString())
            }
            else {
                setDays(d.toString());
            }
            setHours("23")
            setMinutes("59");
            setSeconds("59");
        }
        else {
            console.log("Shoes are Released! ")
        }
    };

    useEffect(() => {
        const interval = setInterval(() => decrementTime(), 1000);

        return () => clearInterval(interval);
    });

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
                <DropZoneNumber number={days} value="DAYS" />
                <DropZoneNumber number={hours} value="HOURS" />
                <DropZoneNumber number={minutes} value="MINS" />
                <DropZoneNumber number={seconds} value="SECS" />
            </Group>
                <Text ta="center" style={{ fontSize: largeScreen ? 25 : 30}}>UNTIL DROP</Text>
        </Stack>
        </Flex>
    );
}
import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './Hero.module.css';
import Image from "next/image";

export function Hero() {
    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(60deg, rgba(100, 0, 0, 0.65) 0%, rgba(100, 0, 0, 0.65) 60%, transparent 60%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} size="md">
                <div className={classes.imageContainer}>
                    <Image src="/umasslogo.png" alt="UMass" layout="fill" objectFit="contain" />
                </div>
                {/* <Title className={classes.title}>Club Golf</Title> */}
            </Container>
        </div>
    );
}
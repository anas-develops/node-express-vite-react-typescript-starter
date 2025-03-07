import {
    Box,
    Card,
    CardContent,
    Grid2 as Grid,
    Link,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useRouteError } from "react-router";
import appConfig from "../../config/appConfig";
// import Header from "../Header/Header";

type Props = {
    scope?: string;
};

const ErrorBoundary = ({ scope }: Props) => {
    const error: Error = useRouteError() as Error;

    useEffect(() => {
        setTimeout(() => {
            window.location.href = appConfig.app.redirectionUrl;
        }, 1500);
    }, []);

    return (
        <React.Fragment>
            {/* <Header /> */}

            <Grid container>
                <Grid size={{ xs: 12 }}>
                    <Box className="max-w-[75%] m-auto">
                        <Card
                            variant="outlined"
                            className="rounded-md h-full border-2 border-gray-customWarmDark"
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className="font-medium text-center"
                                >
                                    {scope ||
                                        "Uh, Oh! We ran into a slight issue"}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    className="font-medium text-center"
                                >
                                    {error?.message || "Some error occurred"}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        mb: 1.5,
                                    }}
                                    variant="h6"
                                    className="font-semibold text-center mt-8"
                                >
                                    You will now be redirected to
                                </Typography>
                                <Typography className="text-center font-bold">
                                    <Link href={appConfig.app.redirectionUrl}>
                                        {appConfig.app.redirectionUrl}
                                    </Link>
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        mb: 1.5,
                                    }}
                                    className="text-center"
                                >
                                    Please click on the above link if you are
                                    not redirected.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                ></Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ErrorBoundary;

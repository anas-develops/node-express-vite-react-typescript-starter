import {
    Box,
    Card,
    CardContent,
    Grid2 as Grid,
    Typography,
} from "@mui/material";
import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
            <Grid container>
                <Grid size={{ xs: 12 }}>
                    <Box className="max-w-[75%] m-auto">
                        <Card
                            variant="outlined"
                            className="rounded-md h-full border-2 border-gray-customWarmDark"
                        >
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    className="font-medium"
                                >
                                    Not Found
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "text.secondary",
                                        mb: 1.5,
                                    }}
                                >
                                    Please verify that the URL you entered is
                                    correct
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

export default NotFound;

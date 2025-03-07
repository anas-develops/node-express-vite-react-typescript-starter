import {
    Grid2 as Grid,
    Paper,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
    Checkbox,
    checkboxClasses,
    IconButton,
    Tooltip,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { EventFilter } from "../../types/events";
import { sky } from "tailwindcss/colors";
import { useToastStore } from "../../store/toastStore";
import { useShallow } from "zustand/shallow";

type SelectOption = {
    name: string;
    values: EventFilter[];
    stateVarRef: any;
    multiple?: boolean;
    onChange: (e: SelectChangeEvent) => void;
    restoreDefault?: () => void;
};

type Props = {
    options: SelectOption[];
    className?: string;
};

const SelectGroup = ({ options, className }: Props) => {
    const { toastMessage } = useToastStore(
        useShallow((state) => ({ ...state }))
    );

    const restoreDefaults = () => {
        options.forEach((option) => {
            if (!option.restoreDefault) return;
            option.restoreDefault();
        });
        toastMessage({
            color: "success",
            title: "Filters Restored",
            message: "Filters have been restored to their default values",
        });
    };

    return (
        <Grid container className={className || ""}>
            <Grid size={12}>
                <Paper
                    elevation={0}
                    className="filter-dropdown-wrap bg-transparent"
                >
                    <Grid
                        container
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        direction={{
                            sm: "column",
                            md: "row",
                        }}
                        spacing={2}
                        className="w-[100%]"
                    >
                        {options.map(
                            (
                                {
                                    name,
                                    values,
                                    stateVarRef,
                                    onChange,
                                    multiple = false,
                                },
                                i
                            ) => (
                                <Grid
                                    key={i}
                                    size={{ xs: 12, md: 3, lg: 3 }}
                                    className="md:max-w-[200px]"
                                >
                                    <FormControl className="w-[100%] md:max-w-[200px]">
                                        <Select
                                            multiple={multiple}
                                            labelId="location-label"
                                            value={stateVarRef}
                                            onChange={onChange}
                                            className="bg-white h-[45px]"
                                            displayEmpty
                                            renderValue={(selected) => {
                                                if (
                                                    multiple ||
                                                    selected.length === 0
                                                ) {
                                                    return name;
                                                } else {
                                                    return selected;
                                                }
                                            }}
                                        >
                                            {values.map(
                                                ({ label, value }, j) => (
                                                    <MenuItem
                                                        value={value}
                                                        key={j}
                                                    >
                                                        {multiple &&
                                                            Array.isArray(
                                                                stateVarRef
                                                            ) && (
                                                                <Checkbox
                                                                    checked={stateVarRef.includes(
                                                                        value
                                                                    )}
                                                                    sx={{
                                                                        [`&, &.${checkboxClasses.checked}`]:
                                                                            {
                                                                                color: sky[600],
                                                                            },
                                                                    }}
                                                                />
                                                            )}
                                                        {label}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        )}
                        <Grid
                            size={{ xs: 12, md: 3, lg: 3 }}
                            className="flex justify-around lg:justify-between md:max-w-[50px]"
                        >
                            <Tooltip title="Restore Defaults">
                                <IconButton
                                    color="error"
                                    aria-label="restore-default"
                                    size="small"
                                    onClick={restoreDefaults}
                                >
                                    <RestoreIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SelectGroup;

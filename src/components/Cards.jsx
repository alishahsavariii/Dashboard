import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import BarChartIcon from "@mui/icons-material/BarChart";
import WeekendIcon from "@mui/icons-material/Weekend";
import { Divider, Grid, Stack, styled } from "@mui/material";

const Box1 = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "space-between",

  justifyContent: "row",
  flexFlow: " no wrap",

  margin: "auto",
  padding: "auto",
  marginTop: "10px",
  width: "84%",
  marginLeft: "230px",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

const Cards = () => {
 const { t, i18n } = useTranslation();
  return (
    <Box1>
      {/* ---------------------------------------Black Card----------------------------------------- */}
      <Grid item xs={8}>
        <Avatar
          variant="rounded"
          sx={{
            position: "relative",
            borderRadius: "0.95rem",
            boxShadow:
              "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            background:
              "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));",
            marginTop: "30px",

            width: "4rem",
            height: "4rem",
            padding: "0",
            left: "90px",
          }}
        >
          <WeekendIcon />
        </Avatar>
      </Grid>
      <Card
        sx={{
          width: "19%",
          maxHeight: "9rem",
          py: "0.5rem",
          px: "0.5rem",
          mx: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "5",
          bgcolor: "white",
        }}
      >
 
        <Grid container>
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              sx={{ textAlign: "right", marginLeft: "9.5rem" }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                color={"rgb(123, 128, 154)"}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                  left: "-10px",
                }}
              >
                <Box sx={{fontWeight  : "bold"}}>
           {t("Bookings")}</Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  m: 1,
                  fontSize: "1.5rem",
                  lineLeight: "1.375",
                  fontWeight: "700",
                  letterSpacing: "0.00735em",
                  color: "rgb(52, 71, 103)",
                }}
              >
                281
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider />
        <Typography
          variant="subtitle1"
          component="p"
          color={"rgb(123, 128, 154)"}
          sx={{
            display: "flex",
            justifyContent: "left",
            fontSize: "0.875rem",
            fontWeight: "300",
            lineHeight: "1.5",
            m: 1,
          }}
        >
          <Typography
            sx={{ color: "rgb(76, 175, 80)", fontWeight: "700", mx: 0.2 }}
          >
            5%
          </Typography>
        {t("than last week")}
        </Typography>
      </Card>
      {/* ---------------------------------------Blue Card----------------------------------------- */}{" "}
      <Grid item xs={7}>
        <Avatar
          variant="rounded"
          sx={{
            borderRadius: "0.75rem",
            boxShadow:
              "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            marginTop: "30px",

            width: "4rem",
            height: "4rem",
            left: "90px",
          }}
        >
          <BarChartIcon />
        </Avatar>
      </Grid>
      <Card
        sx={{
          width: "19%",
          maxHeight: "7.5rem",
          py: "0.5rem",
          px: "0.5rem",
          my: 5,
          mx: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "5",
          bgcolor: "white",
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Stack direction={"column"} sx={{ textAlign: "right", mr: -16 }}>
              <Typography
                variant="subtitle1"
                component="p"
                color={"rgb(123, 128, 154)"}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                }}
              >
                {t("Today's Users")}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  m: 1,
                  fontSize: "1.5rem",
                  lineLeight: "1.375",
                  fontWeight: "700",
                  letterSpacing: "0.00735em",
                  color: "rgb(52, 71, 103)",
                }}
              >
                2,300
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider variant="middle" />
        <Typography
          variant="subtitle1"
          component="p"
          color={"rgb(123, 128, 154)"}
          sx={{
            display: "flex",
            justifyContent: "left",
            fontSize: "0.875rem",
            fontWeight: "300",
            lineHeight: "1.5",
            m: 1,
          }}
        >
          <Typography
            sx={{ color: "rgb(76, 175, 80)", fontWeight: "700", mx: 0.2 }}
          >
            +3%
          </Typography>{" "}
          {t("than last month")}
        </Typography>
      </Card>
      {/* ---------------------------------------Green Card----------------------------------------- */}{" "}
      <Grid item xs={8}>
        <Avatar
          variant="rounded"
          sx={{
            borderRadius: "0.75rem",
            boxShadow:
              "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            background:
              "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
            marginTop: "30px",
            zIndex: 99,
            width: "4rem",
            height: "4rem",
            left: "90px",
          }}
        >
          <StoreMallDirectoryIcon />
        </Avatar>
      </Grid>
      <Card
        sx={{
          width: "19%",
          maxHeight: "7.5rem",
          py: "0.5rem",
          px: "0.5rem",
          my: 5,
          mx: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "5",
          bgcolor: "white",
          float: "left",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Stack direction={"column"} sx={{ textAlign: "right", mr: -18 }}>
              <Typography
                variant="subtitle1"
                component="p"
                color={"rgb(123, 128, 154)"}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                }}
              >
                {t("Revenue")}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  m: 1,
                  fontSize: "1.5rem",
                  lineLeight: "1.375",
                  fontWeight: "700",
                  letterSpacing: "0.00735em",
                  color: "rgb(52, 71, 103)",
                }}
              >
                34k
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider variant="middle" />
        <Typography
          variant="subtitle1"
          component="p"
          color={"rgb(123, 128, 154)"}
          sx={{
            display: "flex",
            justifyContent: "left",
            fontSize: "0.875rem",
            fontWeight: 300,
            lineHeight: "1.5",
            m: 1,
          }}
        >
          <Typography
            sx={{ color: "rgb(76, 175, 80)", fontWeight: "700", mx: 0.2 }}
          >
            +1%
          </Typography>
          {t("than yesterday")}
        </Typography>
      </Card>
      {/* ---------------------------------------Red Card----------------------------------------- */}
      <Grid item xs={8}>
        <Avatar
          variant="rounded"
          sx={{
            borderRadius: "0.75rem",
            boxShadow:
              "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            background:
              "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
            marginTop: "30px",

            width: "4rem",
            height: "4rem",
            left: "90px",
          }}
        >
          <PersonAddIcon />
        </Avatar>
      </Grid>
      <Card
        sx={{
          width: "19%",
          maxHeight: "7.5rem",
          py: "0.5rem",
          px: "0.5rem",
          my: 5,
          mx: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "5",
          bgcolor: "white",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Stack direction={"column"} sx={{ textAlign: "right", mr: -18 }}>
              <Typography
                variant="subtitle1"
                component="p"
                color={"rgb(123, 128, 154)"}
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                }}
              >
                {t("Followers")}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  m: 1,
                  fontSize: "1.5rem",
                  lineLeight: "1.375",
                  fontWeight: "700",
                  letterSpacing: "0.00735em",
                  color: "rgb(52, 71, 103)",
                }}
              >
                +91
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider />
        <Typography
          variant="subtitle1"
          component="p"
          color={"rgb(123, 128, 154)"}
          sx={{
            display: "flex",
            justifyContent: "left",
            fontSize: "0.875rem",
            fontWeight: "300",
            lineHeight: "1.5",
            m: 1,
          }}
        >
          {t("just updated")}
        </Typography>
      </Card>
    </Box1>
  );
};
export default Cards;

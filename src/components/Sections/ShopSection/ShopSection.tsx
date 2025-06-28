"use client";
import { Box, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ py: 10, display: "flex", justifyContent: "center" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShopSection() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="h-100 justify-center items-center p-10 sm:py-30 md:p-40 ">
      <h1 className="text-4xl font-bold text-center mb-10 color-primary">Our Creations</h1>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example "
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#8F7966",
            },
          }}
        >
          <Tab label="Candles" {...a11yProps(0)} className="color-primary" />
          <Tab label="Macrame" {...a11yProps(1)} className="color-primary" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto w-full min-[450px]:p-20 sm:p-0">
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle1.jpeg"
                alt="Candle"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Candles</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle2.jpeg"
                alt="Macrame"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Macrame</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle3.jpeg"
                alt="Macrame"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Macrame</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle4.jpeg"
                alt="Macrame"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Macrame</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle5.jpeg"
                alt="Macrame"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Macrame</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/candles/candle6.jpeg"
                alt="Macrame"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Macrame</h1>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto w-full min-[450px]:p-20 sm:p-0 ">
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/macrames/macrame1.jpeg"
                alt="Candle"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Horizon</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/macrames/macrame3.jpeg"
                alt="Macrame"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Mirage Mirror</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/macrames/macrame2.jpeg"
                alt="Macrame"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Boho Grace</h1>
              </div>
            </div>
          </div>

       
        </div>
      </CustomTabPanel>
    </div>
  );
}

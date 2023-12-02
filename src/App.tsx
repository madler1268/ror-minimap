
import React, { SyntheticEvent, useState } from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import HopooThemeProvider from './HopooTheme';

import ImageSelector from './components/ImageSelector';
import { AncientValleyVariants, DampCavernsVariants, DesolateForestVariants, DriedLakeVariants, HiveClusterVariants, MagmaBarracksVariants, RiskOfRainVariants, SkyMeadowsVariants, SunkenTombsVariants, TempleOfTheEldersVariants } from './images/Stages';
import TabPanel from './components/TabPanel';
import GayImage from '../resources/Gay.png';

function App() {
    const [level, setLevel] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setLevel(newValue);
    };

    return (
        <HopooThemeProvider>
            <Stack>
                <h1>Risk of Rain Returns Maps</h1>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={level} onChange={handleChange} aria-label="basic tabs example" textColor="primary" >
                        <Tab label="First Stages" {...a11yProps(0)} />
                        <Tab label="Second Stages" {...a11yProps(1)} />
                        <Tab label="Third Stages" {...a11yProps(2)} />
                        <Tab label="Fourth Stages" {...a11yProps(3)} />
                        <Tab label="Fifth Stage" {...a11yProps(4)} />
                        <Tab label="Sixth Stage" {...a11yProps(5)} />
                    </Tabs>
                </Box>
                <TabPanel currentIndex={level} index={0}>
                    <Stack>
                        <h2>Desolate Forest</h2>
                        <ImageSelector images={DesolateForestVariants} />
                        <h2>Dried Lake</h2>
                        <ImageSelector images={DriedLakeVariants} />
                    </Stack>
                </TabPanel>
                <TabPanel currentIndex={level} index={1}>
                    <Stack>
                        <h2>Damp Caverns</h2>
                        <ImageSelector images={DampCavernsVariants} />
                        <h2>Sky Meadows</h2>
                        <ImageSelector images={SkyMeadowsVariants} />
                        <h2>Boar Beach</h2>
                        <img src={GayImage} alt="Map stage X" />
                    </Stack>
                </TabPanel>
                <TabPanel currentIndex={level} index={2}>
                    <Stack>
                        <h2>Acient Valley</h2>
                        <ImageSelector images={AncientValleyVariants} />
                        <h2>Sunken Tombs</h2>
                        <ImageSelector images={SunkenTombsVariants} />
                    </Stack>
                </TabPanel>
                <TabPanel currentIndex={level} index={3}>
                    <Stack>
                        <h2>Hive Cluster</h2>
                        <ImageSelector images={HiveClusterVariants} />
                        <h2>Magma Barracks</h2>
                        <ImageSelector images={MagmaBarracksVariants} />
                    </Stack>
                </TabPanel>
                <TabPanel currentIndex={level} index={4}>
                    <Stack>
                        <h2>Temple of the Elders</h2>
                        <ImageSelector images={TempleOfTheEldersVariants} />
                    </Stack>
                </TabPanel>
                <TabPanel currentIndex={level} index={5}>
                    <Stack>
                        <h2>Risk of Rain</h2>
                        <ImageSelector images={RiskOfRainVariants} />
                    </Stack>
                </TabPanel>
            </Stack>
        </HopooThemeProvider>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default App;
import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React, {  useState } from "react";

export default function ImageSelector({ images }: { images: string[] }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handleSelect = (_: any, page: number) => {
        setImageIndex(page - 1);
    }

    return (
        <Stack>
            {images.map((image, index) => <img hidden={imageIndex !== index} src={image} alt="Map stage X" key={index}/> )}
            <Pagination count={images.length} page={imageIndex + 1} onChange={handleSelect} color="primary" variant="outlined" sx={{margin: '10px'}}/>
        </Stack>
    );
}
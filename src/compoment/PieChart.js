import React, { useCallback, useRef } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { CategoryScale, Chart } from 'chart.js/auto'




Chart.register(CategoryScale);
function PieChart({ chartData }) {

    let ref = useRef(null);

    const downloadIamge = useCallback(() => {
        const link = document.createElement("a");
        link.download = "Chart.png";
        link.href = ref.current.toBase64Image();
        link.click();
    }, []);

    return (
        <div>
            <button type='button' onClick={downloadIamge}>Download</button>
            <Doughnut ref={ref} data={chartData} />;
        </div>
    )
}

export default PieChart

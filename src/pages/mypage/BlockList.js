import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlockList = ( {data} ) => {
const underline = {
    textDecoration: 'underline',
    cursor: 'pointer',
    width: '68%'
}

const locationViewId = data.block_id;
const navigate = useNavigate();
    const getBlockUserCheck = async () => {
        navigate("/my/error", { state: { blockId: locationViewId } })
      };

    return (
        <tr>
            <th>{data.block_id}</th>
            <th style={underline} onClick={getBlockUserCheck}>{data.block_nickname}</th>
        </tr>
    );
};

export default BlockList;
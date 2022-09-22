import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import BlockList from './BlockList';

const BlockMember = () => {
    const padding = {
        paddingTop: "80px"
      }

      const [datas, setData] = useState([]);
      const token = localStorage.getItem("access_token");

      const getData = async () => {
        try {
          const response = await axios({
            method: "post",
            url: "/star/api/blockUserGet",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;
          setData(userData.data);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getData();
      }, []);
      console.log(datas);
    return (
        <div>
            <Header />
                <div className="text-center my-20" style={padding}>
                    <p className="text-2xl text-warning">차단 회원</p>
                </div>
                <div className="flex justify-center mb-40">
                    <div className="xl:w-4/12 lg:w-8/12 w-10/12">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>별명</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {datas.map(data=> (
                                    <BlockList key = {data.block_id} data={data} />
                                    ))}   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default BlockMember;
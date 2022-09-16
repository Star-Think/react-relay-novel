import React from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

const BlockMember = () => {
    const padding = {
        paddingTop: "80px"
      }
    return (
        <div>
            <Header />
                <div class="text-center my-20" style={padding}>
                    <p class="text-2xl text-warning">차단 회원</p>
                </div>
                <div class="flex justify-center mb-40">
                    <div class="xl:w-4/12 lg:w-8/12 w-10/12">
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>별명</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
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
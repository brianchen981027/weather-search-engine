import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => (
  <div className="fixed z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
    <div className="flex items-center justify-center bg-white w-14 h-14 rounded-lg">
      <LoadingOutlined className="text-[#082567] text-2xl" spin={isLoading} />
    </div>
  </div>
);

export default Loader;

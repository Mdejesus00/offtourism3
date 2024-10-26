
import React from 'react';
import { HeartIcon, SearchIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

// Example component using lucide-react icons
const IconExample = () => {
  return (
    <div>
      <h2>Lucide React Icons Example</h2>
      <div>
        <HeartIcon size={24} color="red" />
        <SearchIcon size={24} color="blue" />
        <ArrowUpIcon size={24} color="green" />
        <ArrowDownIcon size={24} color="purple" />
      </div>
    </div>
  );
};

export default IconExample;

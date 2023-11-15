import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div className="max-w-35ch bg-test card overflow-hidden rounded-[0.5rem] p-[1.5rem] text-white shadow-lg transition-transform md:hover:scale-105">
      <div className="card-body">
        <h2 className="card-title">Something awesome</h2>
        <p className="mb-5 text-[rgba(255,255,255,0.8)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat
          odio pariatur doloribus sint?
        </p>
        <a href="#" className="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default TestCard;

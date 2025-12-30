import React from "react";

const CoolStats = () => {
  return (
    <section className="py-16 bg-red-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="boxHeader">90+ Countries</h3>
            <p>
            participating worldwide in 2024           
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="boxHeader">1700+ Participants</h3>
            <p>
            throughout all three years
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="boxHeader">806 Teams</h3>
            <p>
            in 2024
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CoolStats;

import React from "react";
import StatusCard from "../../Components/StatusCard";
import CardTable from "../../Components/TableCard";

export default function Dashboard() {
  return (
    <>
      <div className=" max-w-full pt-5 md:px-8 h-auto">
        <div className=" pt-2 pb-18 rounded-lg shadow-lg-green bg-gradient-to-tr from-green-300 to-green-500 container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Tráfego"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Desde o última semana"
            />
            <StatusCard
              color="purple"
              icon="groups"
              title="Novos Usuarios"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Desde a semana passada"
            />
            <StatusCard
              color="yellow"
              icon="paid"
              title="Vendas"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Desde o último mês"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Desde o último mês"
            />
          </div>
        </div>
      </div>
      <div className=" max-w-full pt-5 md:px-8 h-auto">
        <div className="pt-1 pb-5 rounded-lg shadow-lg-teal bg-gradient-to-tr from-teal-300 to-teal-500 container mx-auto max-w-full">
          <div className="px-3  md:px-8 h-auto mt-10">
                <CardTable />
          </div>
        </div>
      </div>
    </>
  );
}

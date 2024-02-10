import dayjs from "dayjs";
require("dayjs/locale/es");

import { ContainerCard } from "@/app/components/UI/container-card";
import Text from "@/app/components/UI/text/text";
dayjs.locale("es");

export const Total = () => {
  return (
    <ContainerCard>
      <div className="grid gap-2">
        <div className="grid p-2">
          <Text color="eerie-black" size="sm" weight="medium">
            Mesa 21 - No. de Cliente: 2
          </Text>
          <Text color="silver" size="xs" className="capitalize">
            {dayjs(Date().toString()).format("DD [de] MMMM YYYY")}
          </Text>
          <Text color="silver" size="xs" className="capitalize">
            Ticket: 241
          </Text>
          <Text color="silver" size="xs" className="capitalize">
            Caja 1
          </Text>
          {/* <div className="text-old-silver text-sm font-medium">test</div> */}
        </div>
        <div className="w-full">
          <table className="w-full text-gray-700">
            <thead>
              <tr className="text-cadet-grey">
                <th className="font-light pb-2">Cant</th>
                <th className="font-light pb-2">Descripción</th>
                <th className="font-light pb-2">P.U.</th>
                <th className="font-light pb-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-y">
                <td className="py-4">
                  <Text size="2xl" weight="bold">
                    2
                  </Text>
                </td>
                <td className="py-4">Cafe Latte</td>
                <td className="py-4">20</td>
                <td className="py-4">40</td>
              </tr>
              <tr className="text-center border-y">
                <td className="py-4">
                  <Text size="2xl" weight="bold">
                    2
                  </Text>
                </td>
                <td className="py-4">Cafe Latte</td>
                <td className="py-4">20</td>
                <td className="py-4">40</td>
              </tr>
              <tr className="text-center border-y">
                <td className="py-4">
                  <Text size="2xl" weight="bold">
                    2
                  </Text>
                </td>
                <td className="py-4">Cafe Latte</td>
                <td className="py-4">20</td>
                <td className="py-4">40</td>
              </tr>
              <tr className="text-center border-y">
                <td className="py-4">
                  <Text size="2xl" weight="bold">
                    2
                  </Text>
                </td>
                <td className="py-4">Cafe Latte</td>
                <td className="py-4">20</td>
                <td className="py-4">40</td>
              </tr>
              <tr className="text-center border-y">
                <td className="py-4">
                  <Text size="2xl" weight="bold">
                    2
                  </Text>
                </td>
                <td className="py-4">Cafe Latte</td>
                <td className="py-4">20</td>
                <td className="py-4">40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContainerCard>
  );
};

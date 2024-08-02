import { FC} from "react";

interface CryptoData {
    name: string;
    abbreviation: string;
    image: string;
    price: string;
    priceChange: string;
    volume: string;
    color: string;
}

interface PricesProps {
    data: CryptoData[];
    getChangeClassName: (change: string) => string;
}

export const Prices: FC<PricesProps> = ({ data, getChangeClassName }) => {    

    return (
        <section className="py-[65px] lg:py-[100px]">
            <div className="px-[15px] mx-auto max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px]">
                <div className="flex mx-[-10px]">
                    <div className="w-full px-[15px] relative">
                        <table className="w-full text-[#fff]">
                            <thead>
                                <tr className="text-[10px] uppercase text-left xl:text-[12px]">
                                    <th className="pl-[10px] px-[10px] py-[15px] xl:px-[40px]">#</th>
                                    <th className="px-[10px] py-[15px]">Name</th>
                                    <th className="px-[10px] py-[15px]">Volume</th>
                                    <th className="px-[10px] py-[15px]">Price</th>
                                    <th className="px-[10px] py-[15px]">Change</th>
                                </tr>
                            </thead>
                          
                            <tbody className="">
                                {data.map((crypto, index) => (
                                    <tr key={crypto.abbreviation} className="group  text-[#c3c9d4] text-[10px] transition-all duration-150 ease-in-out hover:blur-[0] hover:bg-[#3d1f94]">
                                        <td className="relative px-[10px] py-[15px] xl:text-[16px] xl:pl-[40px] xl:px-[20px] xl:py-[35px]">
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                height: '100%',
                                                width: '4px',
                                                backgroundColor: crypto.color
                                            }}></span>
                                            {index + 1}
                                        </td>
                                        <td className="px-[10px] py-[15px]">
                                            <div className="flex items-center  text-center">
                                                <img src={crypto.image} alt={crypto.abbreviation} className="w-[20px] h-[20px] mr-[10px] xl:w-[35px] xl:h-[35px] xl:mr-[20px]" />
                                                <h6 className="text-[14px] font-medium xl:text-[20px]">
                                                    {crypto.name} 
                                                    <span className="text-[#ffba00] uppercase ml-[2px]">{crypto.abbreviation}</span>
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="px-[10px] py-[15px] items-center  xl:text-[16px]">
                                            {crypto.volume}$
                                        </td>
                                        <td className="text-[#ffba00] items-center px-[10px] py-[15px] xl:text-[16px]">
                                            {crypto.price}$
                                        </td>
                                        <td className={`${getChangeClassName(crypto.priceChange)} items-center px-[10px] py-[15px] xl:text-[16px]`}>
                                            {crypto.priceChange}%
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={8} className="text-[12px] py-[20px] px-[10px] text-center">Total Market Cap of all cryptocurrencies: $260 672 532 211</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
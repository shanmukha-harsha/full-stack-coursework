

export const RevenueCard = ({amount, orderCount, title}) => {
    return <div className="bg-white rounded shadow-md p-2">
        <div className="text-gray-700">
            {title}
            ?
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-4xl">
                {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium flex flex-col justify-center">
                <div className="flex">
                    <div className="text-blue-500">
                        {orderCount} order(s) 
                    </div>
                    <div>
                        <svg className="fill-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div> : null}
        </div> 
    </div>
}
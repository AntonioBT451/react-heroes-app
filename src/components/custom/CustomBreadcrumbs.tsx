// src/components/custom/CustomBreadcrumbs.tsx

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router"
import { Fragment } from "react/jsx-runtime";

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs }: Props) => {
    return (
        <Breadcrumb className="m-2">
            <BreadcrumbList>

                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Inicio</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    breadcrumbs.map(({ label, to }) => (
                        <Fragment key={to}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={to}>{label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Fragment>
                    ))
                }

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-slate-900 font-semibold">
                        {currentPage}
                    </BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    )
}

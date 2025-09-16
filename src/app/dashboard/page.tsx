import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Leave</CardTitle>
            <span className="text-sm text-muted-foreground">Days</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">out of 14 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sick Leave</CardTitle>
            <span className="text-sm text-muted-foreground">Days</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">out of 5 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <span className="text-sm text-muted-foreground">Requests</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team On Leave</CardTitle>
            <span className="text-sm text-muted-foreground">Today</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">colleagues are on leave</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Leave History</CardTitle>
          <CardDescription>A summary of your leave requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Annual</TableCell>
                <TableCell>2024-07-20</TableCell>
                <TableCell>2024-07-22</TableCell>
                <TableCell>3</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">Approved</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sick</TableCell>
                <TableCell>2024-06-10</TableCell>
                <TableCell>2024-06-10</TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">Approved</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Annual</TableCell>
                <TableCell>2024-08-01</TableCell>
                <TableCell>2024-08-05</TableCell>
                <TableCell>5</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>
                </TableCell>
                <TableCell>
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Cancel Request</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

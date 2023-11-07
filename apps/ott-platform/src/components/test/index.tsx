import { Button } from "@shared-components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared-components/ui/card";
import { Input } from "@shared-components/ui/input";
import { Label } from "@shared-components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared-components/ui/select";

export default function TestComponent() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>User Settings</CardTitle>
        <CardDescription>Update your user settings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <Input accept="image/*" id="profilePicture" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="notifications">Notification Preferences</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select notification preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Notifications</SelectItem>
              <SelectItem value="important">
                Important Notifications Only
              </SelectItem>
              <SelectItem value="none">No Notifications</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-blue-500 text-white" type="submit">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}

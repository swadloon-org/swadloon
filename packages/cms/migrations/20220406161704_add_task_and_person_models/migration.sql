-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL DEFAULT '',
    "priority" TEXT,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "assignedTo" TEXT,
    "finishBy" DATETIME,
    "relatedLinks" TEXT,
    CONSTRAINT "Task_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "Person" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE INDEX "Task_assignedTo_idx" ON "Task"("assignedTo");

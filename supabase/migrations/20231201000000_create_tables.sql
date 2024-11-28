-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create gift_lists table
CREATE TABLE IF NOT EXISTS gift_lists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES auth.users (id)
        ON DELETE CASCADE
);

-- Create saved_gifts table
CREATE TABLE IF NOT EXISTS saved_gifts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    list_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    url TEXT NOT NULL,
    image_url TEXT,
    reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    CONSTRAINT fk_list
        FOREIGN KEY (list_id)
        REFERENCES gift_lists (id)
        ON DELETE CASCADE
);

-- Create chat_history table
CREATE TABLE IF NOT EXISTS chat_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    messages JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES auth.users (id)
        ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_gift_lists_user_id ON gift_lists(user_id);
CREATE INDEX idx_saved_gifts_list_id ON saved_gifts(list_id);
CREATE INDEX idx_chat_history_user_id ON chat_history(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE gift_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_gifts ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Create policies for gift_lists
CREATE POLICY "Users can view their own gift lists"
    ON gift_lists FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own gift lists"
    ON gift_lists FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own gift lists"
    ON gift_lists FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own gift lists"
    ON gift_lists FOR DELETE
    USING (auth.uid() = user_id);

-- Create policies for saved_gifts
CREATE POLICY "Users can view their own saved gifts"
    ON saved_gifts FOR SELECT
    USING (EXISTS (
        SELECT 1 FROM gift_lists
        WHERE gift_lists.id = saved_gifts.list_id
        AND gift_lists.user_id = auth.uid()
    ));

CREATE POLICY "Users can insert gifts to their lists"
    ON saved_gifts FOR INSERT
    WITH CHECK (EXISTS (
        SELECT 1 FROM gift_lists
        WHERE gift_lists.id = saved_gifts.list_id
        AND gift_lists.user_id = auth.uid()
    ));

CREATE POLICY "Users can update their saved gifts"
    ON saved_gifts FOR UPDATE
    USING (EXISTS (
        SELECT 1 FROM gift_lists
        WHERE gift_lists.id = saved_gifts.list_id
        AND gift_lists.user_id = auth.uid()
    ));

CREATE POLICY "Users can delete their saved gifts"
    ON saved_gifts FOR DELETE
    USING (EXISTS (
        SELECT 1 FROM gift_lists
        WHERE gift_lists.id = saved_gifts.list_id
        AND gift_lists.user_id = auth.uid()
    ));

-- Create policies for chat_history
CREATE POLICY "Users can view their own chat history"
    ON chat_history FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own chat history"
    ON chat_history FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own chat history"
    ON chat_history FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own chat history"
    ON chat_history FOR DELETE
    USING (auth.uid() = user_id);